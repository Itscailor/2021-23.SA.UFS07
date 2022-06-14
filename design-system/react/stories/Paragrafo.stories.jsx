export default {
    title: 'Example/Molecules/Paragrafo',
    component: Paragrafo,
    argTypes: {

    },
};

const Template = (args) => <Paragrafo> {...(args) }</Paragrafo>;
export const PlainParagrafo = Template.bind ({});
PlainParagrafo.args = {
children: "ciaooo"
};