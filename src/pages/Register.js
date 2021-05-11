import React from 'react'

export default function Register() {
    return (
        <div className="join-container">
            <form class="join-form">
                <div class="input-group">
                    <label>Name</label>
                    <input type="text"/>
                </div>
                <div class="input-group">
                    <label>Email</label>
                    <input type="email"/>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <div class="input-group">
                    <button type="submit" class="btn">Join Now</button>
                </div>
            </form>
        </div>
    )
}
