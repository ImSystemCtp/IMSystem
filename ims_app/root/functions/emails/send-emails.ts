import { Resend } from 'resend';

const resend = new Resend('re_QeCwbPos_GPr6khoYaDcbAvRTEBr4F7HM');
resend.emails.send({
    from: 'ims.system.ctpp@gmail.com',
    to: 'abarcajesus58@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});