import config
import hashlib
from googleapiclient.discovery import build
# from google_auth_oauthlib.flow import InstalledAppFlow
# from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from bson import ObjectId
import requests
import json
from uuid import uuid4
import numpy as np
import datetime

def checkforLogin(userName,password,isParent):
    uName=[]
    mailID=[]
    stdId=[]
    role=[]
    designation = []
    shaPass=sha(password)
    print("process started")
    if(isParent!="1"):
        for doc in config.collection.find():
            if(userName==doc["primaryEmail"] and shaPass==doc["password"]):
                uName.append(doc["name"]["givenName"])
                mailID.append(doc["primaryEmail"])
                role.append(doc["organizations"][0]["title"])
                designation.append(doc["organizations"][0]["title"])
                return("Teacher",uName,mailID,None,role,designation)
    else:
        for doc in config.parentCollection.find():
            if(userName==doc["phoneno"] and password==doc["password"]):
                print("yess")
                uName.append(doc["name"])
                stdId.append(doc["studentid"])
                return("Parent",uName,None,stdId,None,None)
# def userNameCheck(userName):
#     uName = []
#     mailID = []
#     designation = []
#     for doc in config.collection.find():
#         if userName == doc["primaryEmail"]:
#             uName.append(doc["name"]["givenName"])
#             mailID.append(doc["primaryEmail"])
#             designation.append(doc["organizations"][0]["title"])
#             return("Success", uName, mailID, designation)


# def passwordCheck(password):
#     for doc in config.collection.find():
#         if sha(password) == doc["password"]:
#             return("Success")


def task_assigned(assigned):
    dataActive = {}
    idActive = {}
    dataUrgent = {}
    idUrgent = {}
    dataComplete = {}
    idComplete = {}
    dataFuture = {}
    idFuture = {}
    dataBacklog = {}
    idBacklog = {}
    activeTask = []
    urgentTask = []
    futureTask = []
    completedTask = []
    backlogTask=[]
    activeTaskID = []
    urgentTaskID = []
    futureTaskID = []
    completedTaskID = []
    backlogTaskID =[]
    for doc in config.collection1.find():
        if assigned == doc["task assigned to"] and "Update Task Status" == doc["task status"]:
            dataActive[doc["task title"]] = str(doc["_id"])
            idActive[str(doc["_id"])] = [doc["task priority"], doc["task assigned by"],
                                    doc["task assigned to"], doc["task title"]]
            activeTask.append(dataActive)
            activeTaskID.append(idActive)


        if assigned == doc["task assigned to"] and doc["task status"] =="Start Task" :
            dataFuture[doc["task title"]] = str(doc["_id"])
            idFuture[str(doc["_id"])] = [doc["task priority"], doc["task assigned by"],
                                    doc["task assigned to"], doc["task title"]]
            futureTask.append(dataFuture)
            futureTaskID.append(idFuture)

        if assigned == doc["task assigned to"] and "Task Completed Successfully" == doc["task status"]:
            dataComplete[doc["task title"]] = str(doc["_id"])
            idComplete[str(doc["_id"])] = [doc["task priority"], doc["task assigned by"],
                                    doc["task assigned to"], doc["task title"]]
            completedTask.append(dataComplete)
            completedTaskID.append(idComplete)

        if assigned == doc["task assigned to"] and "high" == doc["task priority"] and doc["task status"]!="Approved":
            dataUrgent[doc["task title"]] = str(doc["_id"])
            idUrgent[str(doc["_id"])] = [doc["task priority"], doc["task assigned by"],
                                    doc["task assigned to"], doc["task title"]]
            urgentTask.append(dataUrgent)
            urgentTaskID.append(idUrgent)

        if assigned == doc["task assigned to"] and datetime.datetime.now().date() >= datetime.datetime.strptime(doc["task deadline"], "%Y-%m-%d").date() and doc["task status"] !="Approved":
            dataBacklog[doc["task title"]] = str(doc["_id"])
            idBacklog[str(doc["_id"])] = [doc["task priority"], doc["task assigned by"],
                                    doc["task assigned to"], doc["task title"]]
            backlogTask.append(dataBacklog)
            backlogTaskID.append(idBacklog)


    return (activeTask, urgentTask, futureTask, completedTask, backlogTask, activeTaskID, urgentTaskID, futureTaskID, completedTaskID, backlogTaskID)

def task_approved(assigned):
    dataActive = {}
    idActive = {}
    activeTask = []
    activeTaskID = []
    for doc in config.collection1.find():
        if assigned == doc["task assigned by"] and "Task Completed Successfully" == doc["task status"]:
            dataActive[doc["task description"]] = str(doc["_id"])
            idActive[str(doc["_id"])] = [doc["task priority"], doc["task assigned by"],
                                    doc["task assigned to"], doc["task description"]]
            activeTask.append(dataActive)
            activeTaskID.append(idActive)


    return (activeTask, activeTaskID)


def task_approver(approver):
    data1 = []
    for doc in config.collection1.find():
        if approver == doc["task"]["Task Approval require to complete"]:
            data1.append(doc["task"])
            ok = "Success"
            return ok, data1


def getStaffType(staffType):
    staffList = []
    for doc in config.collectionStaff.find():
        if staffType == doc["staffType"]:
            staffList = doc["staffDepartment"]
            return(staffList)


def getResponsibilities(department):
    responsibilities = []
    for doc in config.collectionResponsibilities.find():
        if department == doc["department"]:
            responsibilities = doc["responsibilities"]
            return(responsibilities)


def createCalendarEvent(req_data):
    SCOPES = ['https://www.googleapis.com/auth/calendar']
    creds = None
    creds = Credentials.from_authorized_user_file(f"token.json", SCOPES)
    service = build('calendar', 'v3', credentials=creds)
    config.eventTemplate["description"] = req_data["task description"]
    config.eventTemplate["summary"] = req_data["task description"]
    config.eventTemplate["start"]["dateTime"] = req_data["task deadline"] + \
        "T09:00:00-07:00"
    config.eventTemplate["end"]["dateTime"] = req_data["task deadline"] + \
        "T09:00:00-07:00"
    event = service.events().insert(calendarId='primary',
                                    body=config.eventTemplate).execute()
    print('Event created: %s' % (event.get('htmlLink')))


def createMeeting(req_data,data):
    SCOPES = ['https://www.googleapis.com/auth/calendar']
    creds = None
    creds = Credentials.from_authorized_user_file(f"token.json", SCOPES)
    service = build('calendar', 'v3', credentials=creds)
    config.eventTemplate["description"] = req_data["description"]
    config.eventTemplate["summary"] = req_data["summary"]
    config.eventTemplate["start"]["dateTime"] = req_data["date"]+req_data["startTime"]
    config.eventTemplate["start"]["timeZone"] = "Asia/Kolkata"
    config.eventTemplate["end"]["dateTime"] = req_data["date"]+req_data["endTime"]
    config.eventTemplate["end"]["timeZone"] = "Asia/Kolkata"
    dict1=[]
    dict2 = {}
    for i in data:
        dict2["id"] = np.random.randint(1,1000)
        dict2["email"] = i 
        dict1.append(dict2)
    config.eventTemplate["attendees"] = dict1
    config.eventTemplate["conferenceData"] = {"createRequest": {"requestId": f"{uuid4().hex}",
                                                  "conferenceSolutionKey": {"type": "hangoutsMeet"}}}

    print(config.eventTemplate)

    event = service.events().insert(calendarId='primary',
                                    body=config.eventTemplate, sendNotifications=True, conferenceDataVersion=1).execute()
    print('Event created: %s' % (event.get('htmlLink')))
    return(config.eventTemplate)


def sha(password):
    result = hashlib.sha1(password.encode())
    return result.hexdigest()


def fetchrole(email):
    for i in config.collection.find():
        if email == i["primaryEmail"]:
            user = (i["organizations"][0]["title"])
    for j in config.collection2.find():
        if user == j["users"][0]:
            role = (j["role"])
            return(role)


def getstatus(taskID):
    data = {}
    for i in config.collection1.find():
        if taskID == i["_id"]:
            status = i["task status"]
            break
    for j in config.collectionStatus.find():
        if status == j["title"]:
            data["componentsInput"] = j["componentsInput"]
            data["title"] = j["title"]
            data["componentsButtons"] = j["componentsButtons"]
            data["componentsUpload"] = j["componentsUpload"]
            data["message"] = j["message"]
            data["buttonValue"] = j["buttonValue"]
            data["view"] = j["view"]
            break
    return status, data


def editjson(obj, newMsg, key):
    url = "http://34.136.41.197:5000/getjson"
    payload = json.dumps({
        "objid": obj
    })
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    old = response.json()["json"]
    new = response.json()["json"]

    new[key] = newMsg
    for i in config.collection1.find():
        if ObjectId(obj) == i["_id"]:
            edit = config.collection1.replace_one(old, new)
    return edit


def getJson(objid):
    data = {}
    for i in config.collection1.find():
        if objid == i["_id"]:
            for key, value in i.items():
                if key not in ["_id"]:
                    data[key] = value
            return data


def deletecollection(obj):
    print(obj["obj"])
    for j in config.collection1.find():
        if ObjectId(obj["obj"]) == j["_id"]:
            print("Success")
            config.collection1.delete_one({"_id": ObjectId(obj["obj"])})
            return("Success")


def task_assigned1(obji):
    data = []
    for x in config.collection1.find():
        if ObjectId(obji) == x["_id"]:
            data.append(x)
    return data


def getClassInfo():
    for x in config.collectionClassInfo.find():
        classes = x["classInformation"].keys()
    return list(classes)


def getSectionInfo(cls):
    for x in config.collectionClassInfo.find():
        if cls in x["classInformation"].keys():
            section = x["classInformation"][cls]
            break
    return section


def getSubjectInfo():
    for x in config.collectionClassInfo.find():
        subjects = x["subjectInformation"]
    return list(subjects)


def getTeachersList():
    names = []
    test = {}
    nonTeachers = []
    test1 = {}
    for x in config.collection.find():
        if x["organizations"][0]["title"] == "teacher" or x["organizations"][0]["title"][0] == "teacher":
            names.append(x["name"]["givenName"]+" "+x["name"]["familyName"])
            test[str(x["_id"])] = x["name"]["givenName"] + \
                " "+x["name"]["familyName"]
        else:
            nonTeachers.append(x["name"]["givenName"] +
                               " "+x["name"]["familyName"])
            test1[str(x["_id"])] = x["name"]["givenName"] + \
                " "+x["name"]["familyName"]
    return names, nonTeachers, test, test1


def getAllComments(id):
    for x in config.collection1.find():
        if id == x["_id"]:
            comments = x["task updates"]
            break
    return comments

def taskProfile(obj):
    for i in config.collection.find():
        if ObjectId(obj) == i["_id"]:
            data = i
            data["_id"]= str(data["_id"])
            mail = data["primaryEmail"]
            print(mail)
            designation = data["organizations"][0]["title"]
            if designation in ["classTeacher","teacher","teacherCoordinator", "subCoordinator"]:
                staffType = "Teaching"
            else:
                staffType = "Non-Teaching"
    return mail,designation,staffType


def getInfo(mail):
    for x in config.collection.find():
        if x["primaryEmail"] == mail:
            id = x["_id"]
    for y in config.collectionTeacherAssignments.find():
        if ObjectId(y["id"]) == id:
            ct = y["classTeacher"]
            subjects = y["subjectTeacher"]
            rm = y["reportingManager"]
    for x in config.collection.find():
        if x["_id"] == ObjectId(rm):
            repMgr = x["primaryEmail"]
            reprMgrName = x["name"]["givenName"] + " "+ x["name"]["familyName"]
    return ct, subjects, repMgr, reprMgrName


def getEmail(obji):
    data = []
    for x in config.collection.find():
        if ObjectId(obji) == x["_id"]:
            data.append(x["primaryEmail"])
    return data

def student_list(classn):
    collection = config.db2.collection_names(include_system_collections=False)
    dict2=[]
    for collect in collection:
        if classn == collect:
            for j in config.db2[collect].find():
                dict1 = j
                dict1["_id"] = repr(dict1["_id"])
                dict1["checked"]=False
                dict2.append(dict1)
    return dict2

def qrsearch(test):
    for i in config.collectionQR.find():
        if test == i["QR"]["qrid"]:
            return i["QR"]

# def attendacne_filter(cc, date, st, et, sub):
#     class_collection = []
#     class_collection.append([config.class1,config.class2,config.class3,config.class4,config.class5,
#     config.class6,config.class7,config.class8,config.class9,config.class10,config.nursery,config.lkg,config.ukg])
#     for i in class_collection[0]:
#         for j in i.find():
#             if cc == j['class'] and sub == j['subject'] and date == j['Date'] and st == j["Time"]["starttime"] and et == j["Time"]["endtime"]:
#                 data =  list(i.find())
#                 print (data)
#                 return data
#             else:
#                 print("NO records available")]

def attendacne_filter(cc, sub,date):
    class_collection = []
    class_collection.append([config.class1,config.class2,config.class3,config.class4,config.class5,config.class6,config.class7,config.class8,config.class9,config.class10,config.lkg])
    for i in class_collection[0]:
        for j in i.find():
            if cc == j['class'] and sub == j['subject'] and date == j['Date']:
                data=j
                data["_id"]=str(data["_id"])
                return data["attendance"]

# def marks_filter(cc, sub,date):
#     class_collection1 = []
#     class_collection1.append([config.class1M,config.class2M,config.class3M,config.class4M,config.class5M,config.class6M,config.class7M,config.class8M,config.class9M,config.class10M,config.lkgM]) 
#     for i in class_collection1[0]:
#         for j in i.find():
#             if cc == j['class'] and sub == j['subject'] and date == j['Date']:
#                 data=j
#                 data["_id"]=str(data["_id"])
#                 return data["attendance"]

def marks_filter(classes,exam_type):
    class_collection1 = []
    class_collection1.append([config.class1M,config.class2M,config.class3M,config.class4M,config.class5M,config.class6M,config.class7M,config.class8M,config.class9M,config.class10M,config.lkgM])
    dat=[]
    for i in class_collection1[0]:
        for j in i.find():
            if classes == j['class'] and exam_type == j['exam_type']:
                data=j
                data["_id"]=str(data["_id"])
                dat.append(data)
    info = info1(dat)
    return info

def info1(dat):
    info={}
    marks1 = {}
    students = []
    mark = []
    subjects = []
    for i in dat:
        subjects.append(i["subject"])
        mks= list(i["marks"])
        students.append(mks)
        stu = students[0]
        m = []
        for z in i["marks"].values():
            m.append(z)
        mark.append(m)
    marks = np.transpose(mark)
    marks_final = marks.tolist()
    for a in students[0]:
        for b in marks_final:
            print(b)
            marks1[a]= b
    info["students"]=stu
    info["subjects"]=subjects
    return {"info":info,"marks":marks1}


def getLoginJson(mail,date,sub,cls):
    for j in config.teachers.find():
        if mail == j["data"]["mail"] and date == j["data"]["date"] and sub == j["data"]["sub"] and cls==j["data"]["cls"]:
            data = j
            data["_id"]=str(data["_id"])
            return data

def student_task(class_name,subject_name):
    print(class_name)
    print(subject_name)
    for i in config.student_tasks.find():
        print("hellooooo")
        if class_name == i["assignedClass"] and subject_name == i["assignedSubject"]:
            data = i
            data["_id"]=str(data["_id"])
            return data
