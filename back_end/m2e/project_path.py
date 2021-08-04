import os
import sys

abs_path = os.path.dirname(os.path.abspath(__file__))

base_dir = os.path.join(abs_path, 'm2e')
home_dir = os.path.join(base_dir, 'home')
m2e_dir = os.path.join(base_dir, 'm2e')

sys.path.append(base_dir)
sys.path.append(home_dir)
sys.path.append(m2e_dir)