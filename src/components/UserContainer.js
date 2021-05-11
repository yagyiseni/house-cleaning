import React from 'react'
import UserFilter from '../components/UserFilter'
import UsersFilterList from '../components/UsersFilterList'
import Title from '../components/Title'
// import { withCleanerConsumer } from '../context'

function UserContainer({ context }) {
    // const { sortedCleaners, cleaners } = context;
    // console.log(sortedCleaners);
    return (
        <>
            <UserFilter />
            <div className="all-users-list">
                <Title title="Your Search Results" className="userlist-title"/>
                <UsersFilterList />
            </div>
        </>
    );
}
export default UserContainer
// export default withCleanerConsumer(UserContainer)