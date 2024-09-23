import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const TodoDetails = ({
    todoDetails,
    openDialog,
    setOpenDialog,
    setTodoDetails,
}) => {
    return (
        <>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>{todoDetails?.todo}</DialogTitle>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setTodoDetails(null);
                            setOpenDialog(false);
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default TodoDetails;
