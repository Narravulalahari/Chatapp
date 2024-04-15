import {configureStore} from '@reduxjs/toolkit'
import themeslicereducer from './themeslice'
export const store=configureStore({
    reducer:{
        themekey:themeslicereducer
    }
})