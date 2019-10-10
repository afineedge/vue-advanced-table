export default {
    props: ['node'],
    render() {
        return this.node ? this.node : ''
    }
}