// Declaring this interface provides type safety for message keys
type Messages = typeof import('@/locale/messages/hy.json');
declare interface IntlMessages extends Messages {}
