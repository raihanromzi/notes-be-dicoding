import {
  addNoteHandler,
  deleteNoteByIdHandler,
  editNoteByIdHandler,
  getAllNotesHandler,
  getNotesByIdHandler,
} from './handler.js';

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    // cors di route level
    // options: {
    //   cors: {
    //     origin: ['*'],
    //   },
    // },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

export default routes;
