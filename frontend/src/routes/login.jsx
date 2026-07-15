import { Field, Input,Stack,Button } from "@chakra-ui/react"

import {useState} from "react";
import React from "react"
import login from "../endpoints/api.js"

export default function Login(){
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const handleLogin = () => {
      login(username, password)

}

    return (
        <Stack>
  <Field.Root>
      <Field.Label>Username</Field.Label>
      <Input onChange={(e) => setUsername(e.target.value)} value = {username} type = "text"/>
    </Field.Root>
      <Field.Root>
      <Field.Label>Password</Field.Label>
      <Input onChange = {(e) => setPassword(e.target.value)} value = {password} type = "password"/>
      <Button onClick={handleLogin}>Login</Button>
    </Field.Root>
</Stack>
   
    )
}