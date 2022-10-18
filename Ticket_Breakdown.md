# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Assumptions
The team working is a mixed team of Frontend Developers, Backend Developers and Full Stack Developers
The project is using SQL database
Design/mockups are provided if the case
Admin System will be based on user groups and will include: Facilities_Group - this group is limited to Facilities Users and Super_Admins - this group have full access to entire system

## [DEV-001_Generate_reports_for_our_client_Facilities](Ticket_Breakdown/DEV-001_Generate_reports_for_our_client_Facilities.md) - OPEN

SUB-TASKS:
### [DEV-002_Create_New_Database_Table](Ticket_Breakdown/DEV-002_Create_New_Database_Table.md) - OPEN
### [DEV-003_update_function_getShiftsByFacility](Ticket_Breakdown/DEV-003_update_function_getShiftsByFacility.md) - OPEN
### [DEV-004_Create_new_CRUD_page](Ticket_Breakdown/DEV-004_Create_new_CRUD_page.md) - OPEN
### [DEV-005_Documentation_and_Handover](Ticket_Breakdown/DEV-005_Documentation_and_Handover) - OPEN