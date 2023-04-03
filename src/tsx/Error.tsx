import React from "react"
import {Card, CardContent, CardHeader, CardActions, Button} from "@mui/material"
export default function Error(){
    return (
        <Card sx={{width:"50%", marginLeft:"auto", marginRight:"auto", marginTop:"10%"}}>
            <CardHeader title={<div>404 not found</div>}/>
            <CardContent>
                <p style={{textAlign:"center"}}>
                ページが見つかりませんでした
                </p>
                <CardActions sx={{marginTop:"20px"}}>
                    <Button variant="outlined" href="/">HOMEへ戻る</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}