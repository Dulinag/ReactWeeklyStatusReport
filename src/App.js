import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/material';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import { employeeRows } from './data';
import { DataGrid } from '@mui/x-data-grid';
const Padder = styled.div`

padding: 10px;


`

const Spacer = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;


`

const Leftist4 = styled.div`


display: block;
float: right;
margin-left: 70px;
margin-right: 150px;
padding: 10px;



`


const Spacer3 = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
float: right;


`
const Leftist = styled.div`

  display: block;
  float: right;
  margin-left: 70px;
  margin-right: 150px;
  padding: 10px;

`
const Leftist2 = styled.div`

  display: block;
  float: right;
  margin-right: 160px;

`
const Leftist3 = styled.div`

  display: block;
  float: right;
  margin-right: 50px;
  padding-bottom: 10px;


`


// const rows = [
//   createData('Academics', 159, 6.0, 24, 4.0, 5, 6, 7),
//   createData('Assistive Technologies', 237, 9.0, 37, 4.3),
//   createData('Hearing', 262, 16.0, 24, 6.0, 9.0),
//   createData('Music Therapy', 305, 3.7, 67, 4.3),
//   createData('Occupational Therapy', 356, 16.0, 49, 3.9),
//   createData('Totals', 0, 0, 0, 0, 0, 0, 0),
// ];
const rows = employeeRows.length > 0 && employeeRows.map((employee, i) => {
  return {
    id: i,
    employee: employee["employee"],
    test_date: employee["test_date"],
    result_date: employee["result_date"],
    test_type: employee["test_type"],
    result: employee["result"],
    add_date: employee["add_date"],
    add_by: employee["add_by"],
    file: employee["file"],
    days_to_upload: employee["days_to_upload"],
    days_pending: employee["days_pending"],
  };
});

const columns = [
  { field: 'employee', headerName: 'Employee', width: 150 },
  { field: 'test_date', headerName: 'Test Date', width: 150 },
  { field: 'result_date', headerName: 'Result Date', width: 150 },
  { field: 'test_type', headerName: 'Test Type', width: 150 },
  { field: 'result', headerName: 'Result', width: 150 },
  { field: 'add_date', headerName: 'Add Date', width: 150 },
  { field: 'add_by', headerName: 'Add By', width: 150 },
  { field: 'file', headerName: 'File', width: 150 },
  { field: 'days_to_upload', headerName: 'Days To Upload', width: 150 },
  { field: 'days_pending', headerName: 'Days Pending', width: 150 },
];
function App() {
  const [age, setAge] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterRow, setFilterRow] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);




  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setAge(selectedValue);
    console.log(selectedValue);
    if (selectedValue !== 40) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }

   
  };

  const handleStartDateChange = (event) => {

    setStartDate(event.target.value);

    if(event.target.value ===  ""){
      alert("Input start Date")
    }

  

  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);


    if(event.target.value === ""){

      alert("Input End date")
    }


    
  };
  const [filteredRows, setFilteredRows] = useState(rows);
  const [filterOption, setFilterOption] = useState('');

  const handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    setFilterOption(selectedOption);
    applyFilter(selectedOption);
  };

  const applyFilter = (filterOption) => {
    if (filterOption === '') {
      setFilteredRows(rows);
    } else {
      const filteredRows = rows.filter((row) => {
        const employeeName = row.employee || '';
        return employeeName.toLowerCase().includes(filterOption.toLowerCase());
      });
      setFilteredRows(filteredRows);
    }
  };


  return (
    <>
       <h1>Weekly Management Report</h1>
    
    
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Select</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Select"
            onChange={handleChange}
          >
            <MenuItem value="">Select an option</MenuItem>
            <MenuItem value={10}>All Dates</MenuItem>
            <MenuItem value={20}>This Week</MenuItem>
            <MenuItem value={30}>Last Week</MenuItem>
            <MenuItem value={40}>Custom</MenuItem>
          </Select>
        </FormControl>
     
        <Leftist2>
        {age !== 40 && (
            <button style={{ cursor: "pointer",    backgroundColor: "blue",
            border: "none",
            cursor: "pointer",
            padding: "0", }} onClick={() => {
              setIsFiltering(!isFiltering);
              setFilterRow('');
            }}>
          <Box sx={{ m: 1, minWidth: 120,backgroundColor: 'blue', color: 'white', padding: '10px',textAlign: 'center', fontSize: '20px' }}>
            Filter
          </Box>
          </button>
        )}
</Leftist2>
     
        {showFilter && age === 40 && (
         <Box sx={{ m: 1, minWidth: 120 }}>
          <Spacer>
         <Padder display="flex" justifyContent="space-between" gap="20px">
           <TextField
             id="start-date"
             label="Start Date"
             type="date"
             value={startDate}
             onChange={handleStartDateChange}
             InputLabelProps={{
               shrink: true,
             }}
            
           />
           </Padder>
           <Padder>
       
           <TextField
             id="end-date"
             label="End Date"
             type="date"
             value={endDate}
             onChange={handleEndDateChange}
             InputLabelProps={{
               shrink: true,
             }}
           
           />
         </Padder>
         </Spacer>
       </Box>

   
    
        )}

     
      </div>
<Spacer3>
      <Leftist>
    {age == 40 && (
            <button style={{ cursor: "pointer",    backgroundColor: "blue",
            border: "none",
            cursor: "pointer",
            padding: "0", }} onClick={() => {
              setIsFiltering(!isFiltering);
              setFilterRow('');
            }}>
          <Box sx={{ m: 1, minWidth: 120,backgroundColor: 'blue', color: 'white', padding: '10px',textAlign: 'center', fontSize: '20px' }}>
            Filter
          </Box>
          </button>
        )}
        </Leftist>

        <Leftist4>
        {isFiltering && (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">Select</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={filterOption}
        label="Select"
        onChange={handleFilterChange}
      >
        <MenuItem value="">Select an option</MenuItem>
        <MenuItem value="Rebecca Sklaren">Rebecca Sklaren</MenuItem>
        <MenuItem value="John SkyWalker">John SkyWalker
</MenuItem>
        <MenuItem value="Naruto Uzumaki">Naruto Uzumaki</MenuItem>
        <MenuItem value="Music Therapy">Rebecca Sklaren</MenuItem>
        <MenuItem value="Monkey D Luffy">Monkey D Luffy</MenuItem>
        <MenuItem value="Son Goku">Son Goku</MenuItem>
        <MenuItem value="All Might">All Might</MenuItem>
        
      </Select>
    </FormControl>
  </div>
)}
</Leftist4>


</Spacer3>
<br></br>

      <h3>Current Sessions</h3>

      <br></br>
      <br></br>
      <br></br>

      <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={filteredRows} columns={columns} />

    </div>
  
      {/* <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Service</TableCell>
        <TableCell align="right">Sessions Mandated</TableCell>
        <TableCell align="right">Hours Mandated</TableCell>
        <TableCell align="right">Sessions Provided</TableCell>
        <TableCell align="right">Hours Provided</TableCell>
        <TableCell align="right">Reschedule</TableCell>
        <TableCell align="right"># Made Up</TableCell>
        <TableCell align="right">Sessions Outstanding</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {getFilteredRows().map((row, index) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          style={{
            display:
              isFiltering && filterRow !== '' && index + 1 !== parseInt(filterRow)
                ? 'none'
                : 'table-row',
          }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
          <TableCell align="right">{row.reschedule}</TableCell>
          <TableCell align="right">{row.madeUp}</TableCell>
          <TableCell align="right">{row.outstanding}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer> */}



    </>
  );
}

export default App;
