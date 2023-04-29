## Law Society Web Developer Technical Assessment

## Task 1:
User Story 2 – Generating EFT Reference for PC/QC/SOS applications 
As a Solicitor applying for a PC/QC/SOS and paying via EFT I want the application to record an EFT reference so that my EFT payment can be matched easier 

### AC1 GIVEN I am a solicitor 
WHEN I submit my PC/QC/SOS application and select pay by EFT 
THEN the system should record my EFT Reference number in the format of 

### AC2 GIVEN I am a solicitor 
WHEN I have submitted my application and selected pay by EFT 
THEN the EFT popup should show my EFT reference that is saved on my application 

### AC3 GIVEN I am a solicitor 
WHEN I have submitted my application and selected pay by EFT THEN the EFT popup title should be powered by a culture string with the type of application being dynamically populated within the string e.g. "EFT receipt for {0}" 

### AC4 GIVEN I am a solicitor 
WHEN I have submitted my application, selected pay by EFT and load the EFT Receipt form AND there is no EFT Reference included on my application yet 
THEN the system should record my EFT Reference number in the format of Out of Scope or N/A.

Application types 
- PC - Practising Certificate 
- SOS - Service of State 
- QC - Qualifying Certificate
