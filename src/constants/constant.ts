/*
 - Minimum eight characters, at least one letter, one number and one special character.
      - A-Z, a-z
      - 0-9
      - special character
        - !@#$%^&\*()\_+
*/
export const PASSWORD_VALIDATE =
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
