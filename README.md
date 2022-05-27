## Task:

- 處理表單畫面（包括錯誤狀態），請參考以下連結
  - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/eKGWzAp#Inspector
  - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/GmQeyV8#Inspector
- 新增 theme 並透過 theme 客製化元件樣式，像是 Button, Input 等
  - https://chakra-ui.com/docs/theming/customize-theme
  - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/R1xJkPZ#Inspector
- 透過 react-hook-form 實作表單行為
  - ref: https://react-hook-form.com/
- 完成表單驗證
  - 密碼欄位都必填
  - 密碼格式錯誤
    - Minimum eight characters, at least one letter, one number and one special character.
      - A-Z, a-z
      - 0-9
      - special character
        - !@#$%^&\*()\_+
  - 確認密碼格式錯誤
    - Please make sure your passwords match.
  - onBlur 事件觸發時，進行表單驗證
  - 按下 Submit 按鈕後，印出 form data

## Task:

- Create form layout, including error handling for invalid state
  - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/eKGWzAp
  - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/GmQeyV8
- Add theme and customize components (e.g., Button, Input field) using theme settings
  - https://chakra-ui.com/docs/theming/customize-theme
  - https://www.sketch.com/s/47b60fce-ba90-4120-bc86-6d844bc19b38/a/R1xJkPZ
- Implement form behavior via react-hook-form
  - ref: https://react-hook-form.com/
- Complete form validation, including the below logic
  - All password fields are required
  - Invalid password format
    - Minimum eight characters, at least one letter, one number and one special character.
      - A-Z, a-z
      - 0-9
      - special character
        - !@#$%^&\*()\_+
  - Show error message for invalid password format
    - Please make sure your passwords match.
  - Validate fields when the blur events are triggered
  - Print console log after clicking the Submit button

Style guide:

- **color**
  - primary: '#f65e4e',
  - primaryDark: '#ee5140',
  - primaryHover: '#fc7365',
