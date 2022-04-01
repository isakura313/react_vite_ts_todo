import Button from '@mui/material/Button';

export function HelloWorld({text}:any){
    return(
        <div>
      <Button variant="outlined">Outlined</Button>
            <h1>{text}</h1>
        </div>
    )
}

export default HelloWorld;