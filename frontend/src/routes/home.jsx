import { VStack, Heading, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { get_notes } from "../endpoints/api";

export default function Home() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const fetchNotes = async () => {
            const data = await get_notes()
                setNotes(data)
               
                
            }
        fetchNotes();
    }, [])

    return (
        <VStack>
            <Heading>Welcome back user</Heading>
            <VStack>
                {notes.map((note) => (
          <Text key={note.id || note.welcome_message}>
            {note.welcome_message}
          </Text>
        ))} 
            </VStack>
        </VStack>
    )
}