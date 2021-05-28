import os, sys

print('Please enter your commit message (without `"` and `\'`)')
print('You can also type\'cancel\' to cancel')
commmit_message: str = str(input('Enter your message: '))

if commmit_message == 'cancel':
    sys.exit()

os.system('git add .')
os.system('git commit -m "{}"'.format(commmit_message))

os.system('git push')
sys.exit()