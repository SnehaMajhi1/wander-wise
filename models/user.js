import { Schema, model } from "mongoose"
import { hash } from "bcrypt";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,// removes white spaces from both ends of a string
            validate: {
                validator: (email) => {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                },
                message: "Invalid email address", 
                },
            },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,// configuration , created at updated at create garcha automatically 
    }
    
);

UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await hash(this.password,10);
    }
});

//Ensure password is hashed on update operations as well
UserSchema.pre("findOneAndUpdate", async function (next) {
    if (this.update.password) {
        this.update.password = await hash(this.update.password, 10);
    }
});

const User = model("User", userSchema);

export default User;


  