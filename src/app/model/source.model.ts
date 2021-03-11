import { File } from './file.model';

// Define a Source object which maintains a list of fields
export class Source {

    public file: File;
    public completed: number;

    constructor(file: File, completed: number) {
        this.file = file;
        this.completed = completed;
    }
}
