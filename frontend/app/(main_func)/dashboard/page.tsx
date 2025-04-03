"use client";
import { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    BarElement,
    Title, 
    Tooltip, 
    Legend, 
    ArcElement 
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview');

    // Mock data for the charts
    const workoutData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Workout Duration (mins)',
                data: [45, 60, 30, 75, 60, 90, 45],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const caloriesData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Calories Burned',
                data: [320, 480, 250, 520, 410, 650, 380],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const workoutTypesData = {
        labels: ['Cardio', 'Strength', 'Flexibility', 'Balance', 'HIIT'],
        datasets: [
            {
                label: 'Workout Types',
                data: [35, 45, 10, 5, 15],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Fitness Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold">1,240</div>
                        <p className="text-muted-foreground">Calories Today</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold">4</div>
                        <p className="text-muted-foreground">Workouts This Week</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-2xl font-bold">75%</div>
                        <p className="text-muted-foreground">Goal Progress</p>
                    </CardContent>
                </Card>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                <TabsList className="mb-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="workouts">Workouts</TabsTrigger>
                    <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Weekly Workout Duration</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Line data={workoutData} options={{ responsive: true }} />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Workout Distribution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Doughnut data={workoutTypesData} options={{ responsive: true }} />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                
                <TabsContent value="workouts">
                    <div className="grid grid-cols-1 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Calories Burned</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Bar data={caloriesData} options={{ responsive: true }} />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Workouts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="p-3 bg-muted rounded-md flex justify-between">
                                        <span>Upper Body Strength</span>
                                        <span>45 mins · 320 calories</span>
                                    </li>
                                    <li className="p-3 bg-muted rounded-md flex justify-between">
                                        <span>HIIT Session</span>
                                        <span>30 mins · 380 calories</span>
                                    </li>
                                    <li className="p-3 bg-muted rounded-md flex justify-between">
                                        <span>Cardio Training</span>
                                        <span>60 mins · 450 calories</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                
                <TabsContent value="nutrition">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Macronutrient Breakdown</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Doughnut 
                                    data={{
                                        labels: ['Protein', 'Carbs', 'Fat'],
                                        datasets: [{
                                            data: [30, 50, 20],
                                            backgroundColor: [
                                                'rgba(75, 192, 192, 0.5)',
                                                'rgba(255, 206, 86, 0.5)',
                                                'rgba(255, 99, 132, 0.5)',
                                            ],
                                            borderColor: [
                                                'rgba(75, 192, 192, 1)',
                                                'rgba(255, 206, 86, 1)',
                                                'rgba(255, 99, 132, 1)',
                                            ],
                                        }]
                                    }} 
                                    options={{ responsive: true }} 
                                />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Daily Calorie Intake</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Line 
                                    data={{
                                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                        datasets: [{
                                            label: 'Calories',
                                            data: [2100, 1950, 2200, 2050, 1900, 2300, 2150],
                                            borderColor: 'rgb(255, 99, 132)',
                                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                        }]
                                    }} 
                                    options={{ responsive: true }} 
                                />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>

            <Card>
                <CardHeader>
                    <CardTitle>Upcoming Workouts</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 border rounded-md">
                            <div>
                                <h3 className="font-medium">Lower Body Strength</h3>
                                <p className="text-sm text-muted-foreground">Tomorrow, 6:00 PM</p>
                            </div>
                            <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">
                                Start
                            </button>
                        </div>
                        <div className="flex justify-between items-center p-4 border rounded-md">
                            <div>
                                <h3 className="font-medium">Yoga Flow</h3>
                                <p className="text-sm text-muted-foreground">Wednesday, 7:30 AM</p>
                            </div>
                            <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">
                                Start
                            </button>
                        </div>
                        <div className="flex justify-between items-center p-4 border rounded-md">
                            <div>
                                <h3 className="font-medium">Cardio Session</h3>
                                <p className="text-sm text-muted-foreground">Friday, 5:30 PM</p>
                            </div>
                            <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm">
                                Start
                            </button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}