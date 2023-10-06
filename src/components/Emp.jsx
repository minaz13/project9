import React,{useState} from "react";
import {Grid,Card,CardContent,TextField,Button} from "@mui/material"

export const Emp=()=>{
    const [name,setName]=useState("");
    const [data,setData]=useState(["Revan","Sameer"])
    return(
    <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField  variant="outlined" fullWidth onChange={(e)=>setName(e.target.value)}/>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={()=>setData([...data,name])} variant="contained" color="primary" fullWidth sx={{height:55}}>Submit</Button>
        </Grid>
        {
            data.map((item)=>
              <Grid item xs={3}>
                <Card sx={{bgcolor:"skyblue",height:100}}>
                    <CardContent>
                        <h2>Mr. {item .toUpperCase()}</h2>
                    </CardContent>
                </Card>
                </Grid>

            
            )
        }

    </Grid>
    )
}