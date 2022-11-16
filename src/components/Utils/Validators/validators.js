
export const required = value => (value ? undefined : 'Required');
export const minFieldLength = min => value => value.length >= min ? undefined : 'Too short'
export const composeValidators = (...validators) => {
    return (value) => (
        validators.reduce((error, validator) => error || validator(value), undefined)
    )
}