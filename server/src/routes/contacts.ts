import express from 'express';
import { addContact, fetchAllContacts, findAContact, editContact, deleteContact } from '../controllers/contacts';
const router = express.Router();
import { checkAuth } from '../auth/checkAuth'

router.get('/', fetchAllContacts);

router.get('/:contactID', checkAuth, findAContact);

router.post('/', checkAuth, addContact);

router.patch('/:contactID', checkAuth, editContact);

router.delete('/:contactID', checkAuth, deleteContact);

export default router;
