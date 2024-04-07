import React, { useState } from 'react';
import { GlobalAccess } from "../contexts";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../utils/cn";
import AllData from './AllData';

const AddNote = () => {
    const [note, setNote] = useState({ title: "", discription: "" });
    const [requireField, setRequiredField] = useState(false)
    const { addNote, allNote } = GlobalAccess();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note.title === "" || note.discription === "") {
            setRequiredField(!requireField);
        } else {
            allNote();
            addNote(note.title, note.discription)
            setNote({ title: "", discription: "" })
            console.log("note Added", "success");
        }
        setTimeout(() => { setRequiredField(false) }, [2000])
    };
    const onChangeData = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    };

    return (
        <div className='w-full min-h-[80vh] bg-[#112e42] py-20 flex flex-col items-center justify-center'>
            <div className='min-h-[40vh] w-[80vw] md:w-[60vw] flex justify-center items-center flex-col gap-6 rounded-lg px-5 z-10'>
                <div className="min-w-[30vw] w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-transparent z-40 border-red-400 border-2">
                    <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200 text-center">
                        <span className='text-[#00abf0]'>i</span>NoteBook
                    </h2>
                    <form className="my-8 flex flex-col gap-10" onSubmit={handleSubmit}>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="title">Title</Label>
                            <Input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChangeData} />
                        </LabelInputContainer>

                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="discription">Discription</Label>
                            <Input type="text" className="form-control" id="discription" name='discription' value={note.discription} onChange={onChangeData} />
                        </LabelInputContainer>

                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]
                                active:scale-95 transition hover:dark:bg-zinc-700"
                            type="submit"
                        >
                            ADD &rarr;
                            <BottomGradient />
                        </button>
                        {
                            requireField &&
                            <div>
                                <h2 className='text-pink-500 text-center font-serif'>All Field Required</h2>
                            </div>
                        }

                    </form>

                </div>
            </div>
            <AllData />
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};


export default AddNote
