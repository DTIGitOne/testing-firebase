import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { addDoc , collection } from 'firebase/firestore';
import { fdb } from '../config';
import Loader from './Loader';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 600,
   height: 500,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

const AddCar = () => {
   const [open, setOpen] = React.useState(false);
   const [brand , setBrand] = useState("");
   const [model , setModel] = useState("");
   const [price , setPrice] = useState("");
   const [year , setYear] = useState("");

   const [load , setLoad] = useState(false);

   const [brandError , setBrandError] = useState(false);
   const [modelError , setModelError] = useState(false);
   const [priceError , setPriceError] = useState(false);
   const [yearError , setYearError] = useState(false);

   const [brandErrorText , setBrandErrorText] = useState("");
   const [modelErrorText, setModelErrorText] = useState("");
   const [priceErrorText , setPriceErrorText] = useState("");
   const [yearErrorText , setYearErrorText] = useState("");

   const handleOpen = () => setOpen(true);
   const handleClose = () => {
      setOpen(false);
      setBrand("");
      setModel("");
      setPrice("");
      setYear("");

      setBrandError(false);
      setBrandErrorText("");
      setModelError(false);
      setModelErrorText("");
      setPriceError(false);
      setPriceErrorText("");
      setYearError(false);
      setYearErrorText("");
   }
 
   const onFormSubmit = async (e) => {
      try {
         e.preventDefault();

         if (!brand) {
            setBrandError(true);
            setBrandErrorText("brand is required");
         }

         if (!model) {
            setModelError(true);
            setModelErrorText("model is required");
         }

         if (!price) {
            setPriceError(true);
            setPriceErrorText("price is required");
         }

         if (!year) {
            setYearError(true);
            setYearErrorText("year is required");
         }

         if (!brand || !model || !price || !year) {
            return;
         }

         setLoad(true);

         const carData = {
            brand,
            model,
            price,
            year
         };
   
         await addDoc(collection(fdb, "cars"), carData);

         handleClose();

      } catch(e) {
         setLoad(false);
         alert(e);
      } finally {
         setLoad(false);

      }
   } 
   
   return (
      <div className=' flex-grow flex justify-center items-center'>
      <Loader load={load}/>
      <Button onClick={handleOpen}>Add a car</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <form onSubmit={onFormSubmit} className=' h-full w-full flex flex-col justify-around'>
           <TextField error={brandError} helperText={brandErrorText} value={brand} onChange={(e) => setBrand(e.target.value)} id="outlined-basic" label="brand" variant="outlined" />
           <TextField error={modelError} helperText={modelErrorText} value={model} onChange={(e) => setModel(e.target.value)} id="outlined-basic" label="model" variant="outlined" />
           <TextField error={priceError} helperText={priceErrorText} value={price} onChange={(e) => setPrice(e.target.value)} id="outlined-basic" label="price" variant="outlined" />
           <TextField error={yearError} helperText={yearErrorText} value={year} onChange={(e) => setYear(e.target.value)} id="outlined-basic" label="year" variant="outlined" />
           <span className=' w-full flex gap-4 justify-end'>
             <Button variant="contained" onClick={onFormSubmit}>Add</Button>
             <Button variant="text" color="error" onClick={handleClose}>Cancel</Button>
           </span>
         </form>
        </Box>
      </Modal>
    </div>
   );
}

export default AddCar;