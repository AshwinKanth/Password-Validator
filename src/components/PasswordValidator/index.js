import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  Description,
  Input,
  WarningText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <Input type="password" value={password} onChange={onChangePassword} />
        {password.length < 8 ? (
          <WarningText>Your password must be at least 8 characters</WarningText>
        ) : (
          ''
        )}
      </CardContainer>
    </AppContainer>
  )
}

export default PasswordValidator
