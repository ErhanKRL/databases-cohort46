const insert_options = {
        authors: [
          {
            author_id: 1,
            author_name: 'John Doe',
            university: 'University of Michigan',
            date_of_birth: '1980-01-01',
            h_index: 100,
            gender: 'M'
          },
          {
            author_id: 2,
            author_name: 'Alice Johnson',
            university: 'Stanford University',
            date_of_birth: '1985-03-15',
            h_index: 95,
            gender: 'F'
          },
          {
            author_id: 3,
            author_name: 'David Smith',
            university: 'Harvard University',
            date_of_birth: '1982-05-20',
            h_index: 90,
            gender: 'M'
          },
          {
            author_id: 4,
            author_name: 'Emily Brown',
            university: 'Massachusetts Institute of Technology',
            date_of_birth: '1988-07-10',
            h_index: 85,
            gender: 'F'
          },
          {
            author_id: 5,
            author_name: 'Michael Clark',
            university: 'Massachusetts Institute of Technology',
            date_of_birth: '1983-09-25',
            h_index: 80,
            gender: 'M'
          },
          {
            author_id: 6,
            author_name: 'Sophia Wilson',
            university: 'Harvard University',
            date_of_birth: '1987-11-12',
            h_index: 85,
            gender: 'F'
          },
          {
            author_id: 7,
            author_name: 'Matthew Taylor',
            university: 'Stanford University',
            date_of_birth: '1984-04-08',
            h_index: 75,
            gender: 'M'
          },
          {
            author_id: 8,
            author_name: 'Olivia Martinez',
            university: 'Stanford University',
            date_of_birth: '1986-06-30',
            h_index: 80,
            gender: 'F'
          },
          {
            author_id: 9,
            author_name: 'Daniel Anderson',
            university: 'University of Oxford',
            date_of_birth: '1981-10-17',
            h_index: 70,
            gender: 'M'
          },
          {
            author_id: 10,
            author_name: 'Isabella White',
            university: 'Princeton University',
            date_of_birth: '1989-12-05',
            h_index: 75,
            gender: 'F'
          },
          {
            author_id: 11,
            author_name: 'James Lee',
            university: 'Yale University',
            date_of_birth: '1980-02-14',
            h_index: 65,
            gender: 'M'
          },
          {
            author_id: 12,
            author_name: 'Charlotte Hall',
            university: 'Princeton University',
            date_of_birth: '1984-08-20',
            h_index: 70,
            gender: 'F'
          },
          {
            author_id: 13,
            author_name: 'Andrew Garcia',
            university: 'University of Toronto',
            date_of_birth: '1983-03-10',
            h_index: 60,
            gender: 'M'
          },
          {
            author_id: 14,
            author_name: 'Emma Harris',
            university: 'Cornell University',
            date_of_birth: '1987-05-22',
            h_index: 65,
            gender: 'F'
          },
          {
            author_id: 15,
            author_name: 'William Thompson',
            university: 'Cornell University',
            date_of_birth: '1982-09-28',
            h_index: 55,
            gender: 'M'
          }
        ],
        mentors: [
            { author_id: 1, mentor: 15 },
            { author_id: 2, mentor: 1 },
            { author_id: 3, mentor: 1 },
            { author_id: 4, mentor: 2 },
            { author_id: 5, mentor: 3 },
            { author_id: 6, mentor: 4 },
            { author_id: 7, mentor: 2 },
            { author_id: 8, mentor: 5 },
            { author_id: 9, mentor: 6 },
            { author_id: 10, mentor: 7 },
            { author_id: 11, mentor: 8 },
            { author_id: 12, mentor: 9 },
            { author_id: 13, mentor: 10 },
            { author_id: 14, mentor: 11 },
            { author_id: 15, mentor: 12 }
        ],
      researchPapers:[
        {
          paper_id: 1,
          paper_title: 'Advancements in Quantum Computing',
          conference: 'Quantum Computing Conference',
          publish_date: '2020-01-15'
        },
        {
          paper_id: 2,
          paper_title: 'Machine Learning in Healthcare',
          conference: 'MLHC 2020',
          publish_date: '2020-03-20'
        },
        {
          paper_id: 3,
          paper_title: 'Renewable Energy Technologies',
          conference: 'Renewable Energy Conference',
          publish_date: '2020-05-10'
        },
        {
          paper_id: 4,
          paper_title: 'Advancements in Artificial Intelligence',
          conference: 'AAAI 2020',
          publish_date: '2020-07-01'
        },
        {
          paper_id: 5,
          paper_title: 'Neuroscience Research: Recent Findings',
          conference: 'Neuroscience Conference',
          publish_date: '2020-09-15'
        },
        {
          paper_id: 6,
          paper_title: 'Climate Change and Its Impacts',
          conference: 'Climate Change Symposium',
          publish_date: '2020-11-30'
        },
        {
          paper_id: 7,
          paper_title: 'Advancements in Robotics',
          conference: 'Robotics Summit',
          publish_date: '2021-02-28'
        },
        {
          paper_id: 8,
          paper_title: 'The Future of Space Exploration',
          conference: 'Space Exploration Conference',
          publish_date: '2021-04-10'
        },
        {
          paper_id: 9,
          paper_title: 'Data Privacy and Security',
          conference: 'Privacy & Security Symposium',
          publish_date: '2021-06-20'
        },
        {
          paper_id: 10,
          paper_title: 'Advancements in Biotechnology',
          conference: 'Biotechnology Conference',
          publish_date: '2021-08-01'
        },
        {
          paper_id: 11,
          paper_title: 'Emerging Trends in Computer Vision',
          conference: 'Computer Vision Workshop',
          publish_date: '2021-10-15'
        },
        {
          paper_id: 12,
          paper_title: 'Blockchain Technology: Recent Developments',
          conference: 'Blockchain Summit',
          publish_date: '2021-12-30'
        },
        {
          paper_id: 13,
          paper_title: 'Advancements in Nanotechnology',
          conference: 'Nanotechnology Symposium',
          publish_date: '2022-03-05'
        },
        {
          paper_id: 14,
          paper_title: 'Recent Trends in Cybersecurity',
          conference: 'Cybersecurity Conference',
          publish_date: '2022-05-15'
        },
        {
          paper_id: 15,
          paper_title: 'Health Informatics: Current State and Future Directions',
          conference: 'Health Informatics Symposium',
          publish_date: '2022-07-01'
        },
        {
          paper_id: 16,
          paper_title: 'Advancements in Quantum Computing Technologies',
          conference: 'Quantum Technologies Conference',
          publish_date: '2022-09-15'
        },
        {
          paper_id: 17,
          paper_title: 'AI Ethics: Challenges and Solutions',
          conference: 'AI Ethics Symposium',
          publish_date: '2022-11-01'
        },
        {
          paper_id: 18,
          paper_title: 'Renewable Energy Integration in Smart Grids',
          conference: 'Smart Grid Conference',
          publish_date: '2023-01-20'
        },
        {
          paper_id: 19,
          paper_title: 'Neuroplasticity and Learning: Recent Discoveries',
          conference: 'Neuroscience Symposium',
          publish_date: '2023-03-10'
        },
        {
          paper_id: 20,
          paper_title: 'Advancements in Natural Language Processing',
          conference: 'NLP Summit',
          publish_date: '2023-05-01'
        },
        {
          paper_id: 21,
          paper_title: 'Biomedical Imaging Technologies: Innovations and Applications',
          conference: 'Biomedical Imaging Symposium',
          publish_date: '2023-07-15'
        },
        {
          paper_id: 22,
          paper_title: 'Blockchain Applications in Supply Chain Management',
          conference: 'Supply Chain Summit',
          publish_date: '2023-09-30'
        },
        {
          paper_id: 23,
          paper_title: 'Emerging Trends in Quantum Computing',
          conference: 'Quantum Computing Workshop',
          publish_date: '2023-11-15'
        },
        {
          paper_id: 24,
          paper_title: 'Advances in Gene Editing Technologies',
          conference: 'Gene Editing Symposium',
          publish_date: '2024-01-01'
        },
        {
          paper_id: 25,
          paper_title: 'Cybersecurity Threats in IoT Devices',
          conference: 'IoT Security Conference',
          publish_date: '2024-03-20'
        },
        {
          paper_id: 26,
          paper_title: 'Recent Developments in Machine Learning',
          conference: 'ML Summit',
          publish_date: '2024-05-10'
        },
        {
          paper_id: 27,
          paper_title: 'Climate Change Adaptation Strategies',
          conference: 'Climate Change Symposium',
          publish_date: '2024-07-01'
        },
        {
          paper_id: 28,
          paper_title: 'The Future of Autonomous Vehicles',
          conference: 'Autonomous Vehicles Conference',
          publish_date: '2024-09-15'
        },
        {
          paper_id: 29,
          paper_title: 'Advancements in Quantum Machine Learning',
          conference: 'Quantum Machine Learning Workshop',
          publish_date: '2024-11-01'
        },
        {
          paper_id: 30,
          paper_title: 'Applications of Artificial Intelligence in Finance',
          conference: 'AI in Finance Symposium',
          publish_date: '2024-12-15'
        }
      ],
      authorsPapers: [
        { author_id: 1, paper_id: 1 },
        { author_id: 3, paper_id: 1 },
        { author_id: 5, paper_id: 1 },
        { author_id: 2, paper_id: 2 },
        { author_id: 4, paper_id: 2 },
        { author_id: 6, paper_id: 2 },
        { author_id: 3, paper_id: 3 },
        { author_id: 5, paper_id: 3 },
        { author_id: 7, paper_id: 3 },
        { author_id: 4, paper_id: 4 },
        { author_id: 6, paper_id: 4 },
        { author_id: 8, paper_id: 4 },
        { author_id: 5, paper_id: 5 },
        { author_id: 7, paper_id: 5 },
        { author_id: 9, paper_id: 5 },
        { author_id: 6, paper_id: 6 },
        { author_id: 8, paper_id: 6 },
        { author_id: 10, paper_id: 6 },
        { author_id: 7, paper_id: 7 },
        { author_id: 9, paper_id: 7 },
        { author_id: 11, paper_id: 7 },
        { author_id: 8, paper_id: 8 },
        { author_id: 10, paper_id: 8 },
        { author_id: 12, paper_id: 8 },
        { author_id: 9, paper_id: 9 },
        { author_id: 11, paper_id: 9 },
        { author_id: 13, paper_id: 9 },
        { author_id: 10, paper_id: 10 },
        { author_id: 12, paper_id: 10 },
        { author_id: 14, paper_id: 10 },
        { author_id: 11, paper_id: 11 },
        { author_id: 13, paper_id: 11 },
        { author_id: 15, paper_id: 11 },
        { author_id: 12, paper_id: 12 },
        { author_id: 14, paper_id: 12 },
        { author_id: 1, paper_id: 12 },
        { author_id: 13, paper_id: 13 },
        { author_id: 15, paper_id: 13 },
        { author_id: 2, paper_id: 13 },
        { author_id: 14, paper_id: 14 },
        { author_id: 1, paper_id: 14 },
        { author_id: 3, paper_id: 14 },
        { author_id: 15, paper_id: 15 },
        { author_id: 2, paper_id: 15 },
        { author_id: 4, paper_id: 15 },
        { author_id: 1, paper_id: 16 },
        { author_id: 3, paper_id: 16 },
        { author_id: 5, paper_id: 16 },
        { author_id: 2, paper_id: 17 },
        { author_id: 4, paper_id: 17 },
        { author_id: 6, paper_id: 17 },
        { author_id: 3, paper_id: 18 },
        { author_id: 5, paper_id: 18 },
        { author_id: 7, paper_id: 18 },
        { author_id: 4, paper_id: 19 },
        { author_id: 6, paper_id: 19 },
        { author_id: 8, paper_id: 19 },
        { author_id: 5, paper_id: 20 },
        { author_id: 7, paper_id: 20 },
        { author_id: 9, paper_id: 20 },
        { author_id: 6, paper_id: 21 },
        { author_id: 8, paper_id: 21 },
        { author_id: 10, paper_id: 21 },
        { author_id: 7, paper_id: 22 },
        { author_id: 9, paper_id: 22 },
        { author_id: 11, paper_id: 22 },
        { author_id: 8, paper_id: 23 },
        { author_id: 10, paper_id: 23 },
        { author_id: 12, paper_id: 23 },
        { author_id: 9, paper_id: 24 },
        { author_id: 11, paper_id: 24 },
        { author_id: 13, paper_id: 24 },
        { author_id: 10, paper_id: 25 },
        { author_id: 12, paper_id: 25 },
        { author_id: 14, paper_id: 25 },
        { author_id: 11, paper_id: 26 },
        { author_id: 13, paper_id: 26 },
        { author_id: 15, paper_id: 26 },
        { author_id: 12, paper_id: 27 },
        { author_id: 14, paper_id: 27 },
        { author_id: 1, paper_id: 27 },
        { author_id: 13, paper_id: 28 },
        { author_id: 15, paper_id: 28 },
        { author_id: 2, paper_id: 28 },
        { author_id: 14, paper_id: 29 },
        { author_id: 1, paper_id: 29 },
        { author_id: 3, paper_id: 29 },
        { author_id: 15, paper_id: 30 },
        { author_id: 2, paper_id: 30 },
        { author_id: 4, paper_id: 30 }
      ]
      
}

module.exports = insert_options;