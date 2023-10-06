import React,{useState} from "react";
import {Grid,TextField,Button} from "@mui/material"

export const Home=()=>{
    const [cat,setCat]=useState("");
    const [data,setData]=useState(["Fashion","Cosmetics","Kids","Toys"]);
     

    return(
    <Grid container spacing={2} sx={{marginTop:5}}>
        <Grid item xs={8}>
            <TextField  variant="outlined" label="Add Category" fullWidth onChange={(e)=>setCat(e.target.value)}/>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={()=>setData([...data,cat])} sx={{height:55}} variant="contained" color="secondary" fullWidth>Submit</Button>
        </Grid>
         {
            data.map((item)=>
               <Grid item xs={2}>
                <Button variant="outlined" color="warning" fullWidth>{item}</Button>
                </Grid>

            )
         }
    </Grid>    

    
    )
}