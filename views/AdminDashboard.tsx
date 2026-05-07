import React from 'react';
import { MOCK_SUPERVISOR_STATS } from '../constants';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
    
  // Mock data for platform activity over time
  const activityData = [
    { name: 'يناير', students: 400, completions: 240 },
    { name: 'فبراير', students: 450, completions: 300 },
    { name: 'مارس', students: 600, completions: 450 },
    { name: 'أبريل', students: 580, completions: 480 },
    { name: 'مايو', students: 700, completions: 600 },
  ];

  return (
    <div className="space-y-8">
        <div className="bg-gray-900 text-white p-8 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">لوحة التحكم المركزية</h2>
                <p className="text-gray-400">نظرة شاملة على أداء المنصة والمشرفين</p>
            </div>
            <div className="absolute end-0 top-0 h-full w-1/3 bg-gradient-to-l rtl:bg-gradient-to-r from-primary-600 to-transparent opacity-20"></div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="p-4 bg-indigo-50 text-indigo-600 rounded-xl">
                    <Users size={32} />
                </div>
                <div>
                    <p className="text-gray-500 text-sm">إجمالي المشرفين</p>
                    <h3 className="text-3xl font-bold text-gray-800">24</h3>
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl">
                    <TrendingUp size={32} />
                </div>
                <div>
                    <p className="text-gray-500 text-sm">معدل الإنجاز العام</p>
                    <h3 className="text-3xl font-bold text-gray-800">82%</h3>
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="p-4 bg-rose-50 text-rose-600 rounded-xl">
                    <ShieldCheck size={32} />
                </div>
                <div>
                    <p className="text-gray-500 text-sm">التنبيهات النشطة</p>
                    <h3 className="text-3xl font-bold text-gray-800">3</h3>
                </div>
            </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {/* Supervisor Performance */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6">أداء المشرفين (متوسط درجات طلابهم)</h3>
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={MOCK_SUPERVISOR_STATS} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                        <XAxis type="number" domain={[0, 100]} hide />
                        <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}} />
                        <Tooltip />
                        <Bar dataKey="averageStudentPerformance" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={20} name="متوسط الأداء" />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Growth Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6">نمو المنصة</h3>
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tick={{fontSize: 12}} />
                        <YAxis tick={{fontSize: 12}} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="students" stroke="#0ea5e9" strokeWidth={3} dot={{r: 4}} name="الطلاب الجدد" />
                        <Line type="monotone" dataKey="completions" stroke="#10b981" strokeWidth={3} dot={{r: 4}} name="إكمال الكورسات" />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* Supervisors List Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
                <h3 className="font-bold text-gray-800 text-lg">جدول أداء المشرفين</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-start">
                    <thead className="bg-gray-50 text-gray-500 text-sm">
                        <tr>
                            <th className="px-6 py-4 font-medium">اسم المشرف</th>
                            <th className="px-6 py-4 font-medium">عدد الطلاب</th>
                            <th className="px-6 py-4 font-medium">الدورات النشطة</th>
                            <th className="px-6 py-4 font-medium">تقييم الأداء</th>
                            <th className="px-6 py-4 font-medium">إجراءات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {MOCK_SUPERVISOR_STATS.map((sup) => (
                            <tr key={sup.id} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4 font-medium text-gray-800">{sup.name}</td>
                                <td className="px-6 py-4 text-gray-600">{sup.studentsCount}</td>
                                <td className="px-6 py-4 text-gray-600">{sup.activeCourses}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 w-24 bg-gray-100 h-2 rounded-full overflow-hidden">
                                            <div className="bg-primary-500 h-full" style={{ width: `${sup.averageStudentPerformance}%` }}></div>
                                        </div>
                                        <span className="text-xs font-bold text-gray-600">{sup.averageStudentPerformance}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-gray-400 hover:text-primary-600">
                                        <ShieldCheck size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};