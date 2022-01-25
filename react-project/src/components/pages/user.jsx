import {
    Box,
    Typography,
    Button,
    TextField,
    Select,
    MenuItem,
    Grid
} from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";

const User = () => {
    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <Box py={20} textAlign="center">

                <Typography variant="h2">User</Typography>

                <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
                    <Grid container>
                        <Grid item xs={4}>
                            <TextField id="standard-basic" label="First Name" {...register("firstName")} variant="standard" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="standard-basic" label="Last Name" {...register("lastName")} variant="standard" />
                        </Grid>
                        <Grid item xs={4}>
                            <Select {...register("category")}
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    
                    <p>{result}</p>
                    <Button variant="contained" style={{ color: "white", background: "green" }} type="submit">Submit</Button>
                </form>
            </Box>
        </div>
    );
};
export default User;
