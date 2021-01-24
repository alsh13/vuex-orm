import { Model } from '@vuex-orm/core'
import Post from './Post'

export default class User extends Model {
    static entity = 'users'
    static  primaryKey='id';
    static fields () {
        return {
            id: this.uid(null),
            name: this.string(''),
            // username: this.string(''),
            email: this.string(''),
            // address: this.hasOne(Address, 'user_id'),
            posts: this.hasMany(Post, 'userId')
        }
    }
}