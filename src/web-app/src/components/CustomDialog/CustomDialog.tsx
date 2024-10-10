import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { CustomDialogProps } from './CustomDialog.type'
import { CustomLink } from '../CustomLink'
import { Box } from '@mui/material'
import { StyledDialog } from './CustomDialog.style'

export const CustomDialog = ({ isOpen, handleClose }: CustomDialogProps) => {
  return (
    <>
      <StyledDialog
        maxWidth="xs"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition={false}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries(formData.entries())
            console.log(formJson)
            handleClose()
          }
        }}
      >
        <DialogTitle textAlign="center" variant="h5">
          Add New Bot
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            id="botName"
            name="botName"
            label="Bot Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="dense"
            id="channelId"
            name="channelId"
            label="Channel ID"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="dense"
            id="channelSecret"
            name="channelSecret"
            label="Channel Secret"
            type="password"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="dense"
            id="channelAccessToken"
            name="channelAccessToken"
            label="Channel Access Token"
            type="password"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions className="dialog__actionBox">
          <Box>
            <CustomLink linkText="See Tutorial" link={''} />
          </Box>
          <Box>
            <Button onClick={handleClose} variant="contained" color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="success"
              className="dialog__actionButton"
            >
              Done
            </Button>
          </Box>
        </DialogActions>
      </StyledDialog>
    </>
  )
}
