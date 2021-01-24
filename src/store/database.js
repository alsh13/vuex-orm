import axios from 'axios'
import VuexORMAxios from "@vuex-orm/plugin-axios";
import VuexORM from '@vuex-orm/core'
import User from '@/models/User'
import Post from '@/models/Post'
import Address from "@/models/Address";

VuexORM.use(VuexORMAxios, {axios});
const database = new VuexORM.Database();

database.register(User);
database.register(Post);
database.register(Address);

export default database;

