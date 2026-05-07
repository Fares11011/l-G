import React from 'react';
import { MOCK_STUDENT_STATS } from '../constants';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Search, Filter, Download } from 'lucide-react';

const COLORS = ['#0ea5e9', '#8b5cf6', '#f59e0b', '#10b981'];

export const SupervisorDashboard: React.FC = () => {
  const averageData = [
    { name: 'ممتاز (90-100)', value: 25 },
    { name: 'جيد جداً (80-89)', value: 40 },
    { name: 'جيد (70-79)', value: 20 },
    { name: 'يحتاج دعم (<70)', value: 15 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h2 className="text-2xl font-bold text-gray-800">متابعة الطلاب</h2>
           <p className="text-gray-500">لوحة تحليلية لأداء الطلاب في المسارات التعليمية</p>
        </div>
        <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                <Filter size={18} />
                <span>تصفية</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 shadow-sm">
                <Download size={18} />
                <span>تصدير التقرير</span>
            </button>
        </div>
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6">متوسط درجات الطلاب</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_STUDENT_STATS}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="studentName" fontSize={12} tick={{ fill: '#64748b' }} />
                <YAxis fontSize={12} tick={{ fill: '#64748b' }} />
                <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    cursor={{ fill: '#f1f5f9' }}
                />
                <Bar dataKey="averageScore" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6">توزيع المستويات</h3>
            <div className="h-80 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={averageData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {averageData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 flex-wrap mt-4">
                {averageData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                        <span className="text-xs text-gray-600">{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Students List Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 text-lg">قائمة الطلاب المكلفين</h3>
            <div className="relative w-64">
                <Search className="absolute end-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                    type="text" 
                    placeholder="بحث بالاسم..." 
                    className="w-full ps-4 pe-10 py-2 rounded-lg bg-gray-50 border-none text-sm focus:ring-2 focus:ring-primary-100 outline-none"
                />
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-start">
                <thead className="bg-gray-50 text-gray-500 text-sm">
                    <tr>
                        <th className="px-6 py-4 font-medium">اسم الطالب</th>
                        <th className="px-6 py-4 font-medium">الدورات المكتملة</th>
                        <th className="px-6 py-4 font-medium">متوسط الأداء</th>
                        <th className="px-6 py-4 font-medium">آخر نشاط</th>
                        <th className="px-6 py-4 font-medium">الحالة</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {MOCK_STUDENT_STATS.map((student) => (
                        <tr key={student.studentId} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-800">{student.studentName}</td>
                            <td className="px-6 py-4 text-gray-600">{student.coursesCompleted}</td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    student.averageScore >= 90 ? 'bg-green-100 text-green-700' :
                                    student.averageScore >= 75 ? 'bg-blue-100 text-blue-700' :
                                    'bg-orange-100 text-orange-700'
                                }`}>
                                    {student.averageScore}%
                                </span>
                            </td>
                            <td className="px-6 py-4 text-gray-500 text-sm">{student.lastActive}</td>
                            <td className="px-6 py-4">
                                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                                    عرض التفاصيل
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