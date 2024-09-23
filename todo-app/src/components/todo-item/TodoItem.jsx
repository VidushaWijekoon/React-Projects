import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";

const TodoItem = ({ todo, fetchDetailsOfCurrentTodo }) => {
    return (
        <Card
            className=""
            style={{
                maxWidth: "350",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginBottom: "5px",
                padding: "10px",
            }}
        >
            <CardContent>
                <Typography variant="h5" color={"text.seconday"}>
                    {todo?.todo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
                    sx={{
                        backgroundColor: "#000000",
                        color: "#fff",
                        opacity: "1",
                        "&:hover": {
                            backgroundColor: "#000000",
                            color: "#fff",
                            opacity: "1",
                        },
                    }}
                >
                    Show Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default TodoItem;
