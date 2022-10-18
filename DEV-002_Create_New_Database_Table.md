
DEV-002_Create_New_Database_Table
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
Create many-to-many relationship for Facilities and Agents tables and store custom agent id in column facility_agent_id in the new table Agent_Facility.

Proposed Schema Migration
Table Agent_Facility

| id | facility_id | agent_id | facility_agent_id |
|----|-------------|----------|-------------------|

- facility_id and agent_id: uniquekey
- `facility_id` column is forign key from `Facilites` table
- `agent_id` column is forign key from `Agent` table
- facility_agent_id: defaults to NULL


ACCEPTANCE CRITERIA:
    This table should not impact existing logic
    Have Automated Passed Test 
