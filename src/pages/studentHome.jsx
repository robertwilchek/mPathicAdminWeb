import React from "react";
import './pageStyles.css';
import completed from '../assets/completed.png'

const Home_Page = () => {
    const lessons = [
        { name: 'Lesson1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis. Malesuada proin libero nunc consequat interdum. Nunc aliquet bibendum enim facilisis gravida. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Elit ut aliquam purus sit amet luctus venenatis. Placerat orci nulla pellentesque dignissim enim. Gravida rutrum quisque non tellus orci ac. Sapien et ligula ullamcorper malesuada. In vitae turpis massa sed elementum tempus egestas sed sed. Blandit volutpat maecenas volutpat blandit aliquam etiam. Eu scelerisque felis imperdiet proin fermentum. Odio eu feugiat pretium nibh.', status: 'completed' },
        { name: 'Lesson2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis. Malesuada proin libero nunc consequat interdum. Nunc aliquet bibendum enim facilisis gravida. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Elit ut aliquam purus sit amet luctus venenatis. Placerat orci nulla pellentesque dignissim enim. Gravida rutrum quisque non tellus orci ac. Sapien et ligula ullamcorper malesuada. In vitae turpis massa sed elementum tempus egestas sed sed. Blandit volutpat maecenas volutpat blandit aliquam etiam. Eu scelerisque felis imperdiet proin fermentum. Odio eu feugiat pretium nibh.', status: 'incomplete' },
        { name: 'Lesson3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis. Malesuada proin libero nunc consequat interdum. Nunc aliquet bibendum enim facilisis gravida. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Elit ut aliquam purus sit amet luctus venenatis. Placerat orci nulla pellentesque dignissim enim. Gravida rutrum quisque non tellus orci ac. Sapien et ligula ullamcorper malesuada. In vitae turpis massa sed elementum tempus egestas sed sed. Blandit volutpat maecenas volutpat blandit aliquam etiam. Eu scelerisque felis imperdiet proin fermentum. Odio eu feugiat pretium nibh.', status: 'incomplete' },
        { name: 'Lesson4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis. Malesuada proin libero nunc consequat interdum. Nunc aliquet bibendum enim facilisis gravida. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Elit ut aliquam purus sit amet luctus venenatis. Placerat orci nulla pellentesque dignissim enim. Gravida rutrum quisque non tellus orci ac. Sapien et ligula ullamcorper malesuada. In vitae turpis massa sed elementum tempus egestas sed sed. Blandit volutpat maecenas volutpat blandit aliquam etiam. Eu scelerisque felis imperdiet proin fermentum. Odio eu feugiat pretium nibh.', status: 'incomplete' }
    ]
    return (
        <div>
            <div className="card">
                <div className="bg-jumbotronBg text-jumbotronText text-center pb-3">
                    <h1 className="text-4xl mb-4 text-white">-- Students Record Page --</h1>
                    <p className="text-2xl mb-4 text-white">Welcome Information</p>
                    <p className="text-2xl mb-4 text-white">The following information is your progress in completing the lessons</p>
                </div>
                <div className="py-2 px-4 bg-cardSub5">
                    <p className="text-center pb-4 text-white text-xl font-semibold">If you need to download the application, please choose your platform</p>
                    <div className="w-100">
                        <div className="flex justify-around items-center pb-5">
                            <button className="btn p-1 text-semibold w-[20%]">Download Windows</button>
                            <button className="btn p-1 text-semibold w-[20%]">Download MAC</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* //#region Masterblock */}
            <div className="flex flex-col justify-between items-center container-1">
                {lessons.map((lesson, index) => (
                    <div key={index} className="masterCard p-2 flex flex-row justify-between gap-8">
                        <div className="cardContainer w-[15%] p-3">
                            <div class={`homeCard p-3 ${lesson.status === 'completed' ? 'homeCard-completed' : 'homeCard-incomplete'}`}>
                                <h3 className="text-lg font-semibold text-center">{lesson.name}</h3>
                                <div className="flex justify-center item-center">
                                    <button className={`viewButton text-xs font-semibold ${lesson.status === 'completed' ? 'viewButton-active' : 'viewButton-disabled'}`}>View</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-[70%]">
                            <p className="text-sm">{lesson.description}</p>
                        </div>
                        <div className="w-[15%]">
                            {lesson.status === 'completed' ? (
                                <img src={completed} className="object-fill h-24 w-24" alt="completed badge" />
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
            {/* //#endregion Masterblock */}
        </div>
    )
}

export default Home_Page