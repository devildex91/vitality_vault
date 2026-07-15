import {VStack, Heading, Text} from "@chakra-ui/react"
import {useEffect, useState} from "react";
import {get_notes} from "../endpoints/api";

export default function Home(){
const [notes, setNotes] = useState([])
useEffect(() => {
    const fetchNotes = async () => {
        const notes = await get_notes()
        setNotes(notes)
    }
    fetchNotes();
})

    return(
        <VStack>
            <Heading>Welcome back user</Heading>
            <VStack>
                 {notes.map((note) => {
                    return <Text>note.description</Text>
                 })}        
            </VStack>
        </VStack>
        
    )
}