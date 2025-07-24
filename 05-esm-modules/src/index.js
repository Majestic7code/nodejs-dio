import {connectToDatabase, dataType} from './utils/database.js';
import * as api from './utils/api.js'

api.getDataFromApi()
connectToDatabase ('Clientes')