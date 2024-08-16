document.addEventListener('DOMContentLoaded', function() {
    const departmentSelect = document.getElementById('department');
    const doctorSelect = document.getElementById('doctor');
  
    const doctors = {
      cardiology: ['Dr. Seema', 'Dr. Ruby'],
      orthopedic: ['Dr. John', 'Dr. Smith'],
      dermatologist: ['Dr. Emily', 'Dr. Sophia'],
      'ent-specialist': ['Dr. Toni', 'Dr. Mark'],
      'general-surgeon': ['Dr. David', 'Dr. Sarah'],
      pediatrics: ['Dr. Michael', 'Dr. Jennifer']
    };
  
    departmentSelect.addEventListener('change', function() {
      const selectedDepartment = this.value;
      const departmentDoctors = doctors[selectedDepartment];
      doctorSelect.innerHTML = '<option value="" disabled selected>Select Doctor</option>';
      departmentDoctors.forEach(function(doctor) {
        const option = document.createElement('option');
        option.text = doctor;
        option.value = doctor;
        doctorSelect.add(option);
      });
    });
  
    const appointmentForm = document.getElementById('appointmentForm');
    appointmentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Implement appointment submission logic here
      alert('Appointment submitted!');
    });
  });
  