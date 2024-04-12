// slices/studentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    // Sample data array
    {
      item_id: 1,
      Scan_name: "John Doe",
      URL: "https://www.cyethack.com/",
      ScanEngine: "Engine-jan 10",
      status: "completed",
      RiskScore: "B",
      TotalVulnerablities: "212",
      Severity :{
        Risk_Score:5.2,
        Critical:43,
        High:48,
        Medium:59,
        Low:60},
    },
    {
      item_id: 2,
      Scan_name: "John Doe",
      URL: "https://www.cyethack.com/",
      ScanEngine: "tanishq doing testing (wow)",
      status: "completed",
      RiskScore: "B",
      TotalVulnerablities: "212",
      Severity :{
        Risk_Score:6.2,
        Critical:54,
        High:88,
        Medium:69,
        Low:38},
    },
    {
      item_id: 3,
      Scan_name: "John Doe",
      URL: "https://www.cyethack.com/",
      ScanEngine: "tanishq doing testing (wow)",
      status: "completed",
      RiskScore: "B",
      TotalVulnerablities: "212",
      Severity :{
        Risk_Score:5.2,
        Critical:43,
        High:88,
        Medium:49,
        Low:80},
    },
    {
      item_id: 4,
      Scan_name: "John Doe",
      URL: "https://www.cyethack.com/",
      ScanEngine: "tanishq doing testing (wow)",
      status: "completed",
      RiskScore: "B",
      TotalVulnerablities: "212",
      Severity :{
        Risk_Score:9.2,
        Critical:98,
        High:58,
        Medium:99,
        Low:30},
    },
    {
      item_id: 5,
      Scan_name: "John Doe",
      URL: "https://www.cyethack.com/",
      ScanEngine: "tanishq doing testing (wow)",
      status: "completed",
      RiskScore: "B",
      TotalVulnerablities: "212",
      Severity :{
        Risk_Score:2.2,
        Critical:34,
        High:38,
        Medium:39,
        Low:89},
    },
    {
      item_id: 6,
      Scan_name: "John Doe",
      URL: "https://www.cyethack.com/",
      ScanEngine: "tanishq doing testing (wow)",
      status: "completed",
      RiskScore: "B",
      TotalVulnerablities: "212",
      Severity :{
        Risk_Score:8.2,
        Critical:89,
        High:58,
        Medium:89,
        Low:20},
    },
    {
      item_id: 7,
      Scan_name: "John Doe",
      URL: "https://www.cyethack.com/",
      ScanEngine: "tanishq doing testing (wow)",
      status: "completed",
      RiskScore: "B",
      TotalVulnerablities: "212",
      Severity :{
        Risk_Score:10,
        Critical:80,
        High:50,
        Medium:50,
        Low:50},
    },
    {
      item_id: 8,
      Scan_name: "John Doe",
      URL: "https://www.cyethack.com/",
      ScanEngine: "tanishq doing testing (wow)",
      status: "completed",
      RiskScore: "B",
      TotalVulnerablities: "212",
      Severity :{
        Risk_Score:4.4,
        Critical:10,
        High:48,
        Medium:69,
        Low:35},
    },
    // Add more student data as needed
  ],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    removeStudent(state, action) {
      state.students = state.students.filter(
        (student) => student.item_id !== action.payload
      );
    },
  },
});

export const { removeStudent } = studentSlice.actions;
export default studentSlice.reducer;
