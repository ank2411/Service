export async function getContact(ctx: Context, next: () => Promise<any>) {
    const {
        vtex: {
        },
        clients: { getContactDetails } 
    } = ctx
    const data = await getContactDetails.getContactDetails()
    ctx.body=data
    await next()
}