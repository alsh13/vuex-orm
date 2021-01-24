import { Model } from '@vuex-orm/core'
import User from './User'

export default class Address extends Model {
    static entity = 'addresses'

    static fields () {
        return {
            id:this.attr(null),
            user_id:this.attr(null),
            street:this.string(""),
            suite:this.string(""),
            city:this.string(""),
            zipcode:this.string(""),
            post_author: this.belongsTo(User, 'user_id')
        }
    }
}