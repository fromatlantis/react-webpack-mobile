const origin = window.location.origin
export const APPID =
    process.env.CONFIG_ENV === 'development' ? 'HZYYGLPTWYFW0034' : 'HZYYGLPTWYFW0065'
export default {
    origin,
    sso: `${origin}/portal/#/login`,
}
