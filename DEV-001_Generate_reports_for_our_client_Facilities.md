
DEV-001_Generate reports for our client Facilities
DETAILS:
Type: Task
Department: FE and BE
Status: OPEN 
Priority: Low
Resolution: Unresolved
Sprint: HeatInferno
Time Estimate: 5h

ATTACHMENTS:

IMPLEMENTATION DETAILS:
Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

ACCEPTANCE CRITERIA:
- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

SUB-TASKS:
### [DEV-002_Create_New_Database_Table](DEV-002_Create_New_Database_Table.md) - OPEN
### [DEV-003_update_function_getShiftsByFacility](DEV-003_update_function_getShiftsByFacility.md) - OPEN
### [DEV-004_Create_new_CRUD_page](DEV-004_Create_new_CRUD_page.md) - OPEN
### [DEV-005_Documentation_and_Handover](DEV-005_Documentation_and_Handover) - OPEN
