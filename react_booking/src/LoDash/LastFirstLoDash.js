import React from 'react'
import _ from 'lodash';
export default function LastFirstLoDash() {
    const animal = [
        { id: 1, name: 'meo' },
        { id: 2, name: 'cho' },
        { id: 3, name: 'gau' },
        { id: 4, name: 'chim' },
    ]
    const arr = [
        ['dan', '1'],
        ['hau', '2'],
        ['anh', '3'],

    ]
    return (
        <div>
            <div>First Name Animal: {_.first(animal).name}, First Id Animal:  {_.first(animal).id}</div>
            <div>Last Name Animal: {_.last(animal).name}, Last Id Animal:  {_.last(animal).id}</div>
            <div>name: {_.first(arr)}</div>
        </div>
    )
}
