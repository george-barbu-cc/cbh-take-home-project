DEV-003_update_function_getShiftsByFacility
DETAILS:
Type: Task
Department: BE
Status: OPEN 
Priority: Low
Resolution: Unresolved
Sprint: HeatInferno
Time Estimate: 1h

ATTACHMENTS:

IMPLEMENTATION DETAILS:
Update Agent metadata to include the new facility_agent_id in Function getShiftsByFacility 
Use existing Facility's id to query the Table Agent_Facility and add facility_agent_id if exists, to metadata list return

ACCEPTANCE CRITERIA:
    facility_agent_id will be shown in all reports
    facility_agent_id can be empty
    If facility_agent_id is empty will be hiden in Function generateReport

ISSUE LINKS:
### [DEV-002_Create_New_Database_Table](DEV-002_Create_New_Database_Table.md) - OPEN
