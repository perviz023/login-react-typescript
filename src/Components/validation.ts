const REQUIRED_FIELD = 'Обязательно для заполнение '


export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {

        if(value.match(/[а-яА-Я]/)) {
            return "Логин не должен содержать русские буквы"
        }
        return true;

    }
}


export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.length < 6){
            return 'Пароль должен быть больше 6-и символов'
        }

        return true;
    }
}