import React, { Component } from 'react';

class ListGuest extends Component {
    state = {
        guest: []
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Guest List</h2>
                <div className="row">
                    <table className="table table-striped table-border">
                        <thead>
                            <tr>
                                <th> Guest's First Name </th>
                                <th> Guest's Last Name </th>
                                <th> Guest's Email </th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.guest.map(
                                    guest =>
                                    <tr key = {guest.id}>
                                        <td> {guest.firstName} </td>
                                        <td> {guest.lastName} </td>
                                        <td> {guest.email} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListGuest;